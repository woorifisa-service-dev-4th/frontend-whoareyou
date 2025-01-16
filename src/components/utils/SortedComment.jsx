function byCreatedAtDescThenIdDesc(a, b) {
    const tA = new Date(a.body.createdAt).getTime();
    const tB = new Date(b.body.createdAt).getTime();
    if (tA !== tB) return tB - tA;  // newer comment first
    return b.id - a.id;            // if tie, higher id first
  }
  
  const sortActiveComments = (comments) => {
    // 1) Filter for active comments with post_id = 0
    const activeComments = comments.filter(
      (c) => c.status === 'active' && c.body.post_id === 0
    );
  
    // 2) Map each comment by its id for quick lookup
    const commentMap = new Map();
    for (const c of activeComments) {
      commentMap.set(c.id, c);
    }
  
    // 3) Build a map of children keyed by their parent’s id
    const childrenMap = {};
    const childIds = new Set();
  
    for (const c of activeComments) {
      const parentId = c.body.comment_id;
      if (
        parentId !== undefined && 
        parentId !== null && 
        commentMap.has(parentId) && 
        parentId !== c.id // Safety check: avoid self-reference
      ) {
        if (!childrenMap[parentId]) childrenMap[parentId] = [];
        childrenMap[parentId].push(c);
        childIds.add(c.id);
      }
    }
  
    // 4) Identify parents (comments not stored in childIds),
    //    then sort them by createdAt desc, fallback to id desc
    const parents = activeComments
      .filter((c) => !childIds.has(c.id))
      .sort(byCreatedAtDescThenIdDesc);
  
    // 5) Rebuild the list: each parent, then its children sorted by id ascending
    const result = [];
    for (const parent of parents) {
      result.push(parent);
      if (childrenMap[parent.id]) {
        childrenMap[parent.id].sort((a, b) => a.id - b.id);
        result.push(...childrenMap[parent.id]);
      }
    }
  
    return result;
  }

  export default sortActiveComments;