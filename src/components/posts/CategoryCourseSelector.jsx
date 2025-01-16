import * as React from "react";
import CourseFilter from "./CourseFilter";
import CategoryFilter from "./CategoryFilter";


const CategoryCourseSelector = () => {
    const courseName = (data) => console.log(data);
    const categoryName = (data) => console.log(data);
     
    return (
        <div className="flex flex-wrap gap-2.5 items-start mt-2.5 w-full text-base max-md:max-w-full">
            <CourseFilter onChange={categoryName}/>
            <CategoryFilter onChange={courseName} />
            <div className="overflow-hidden flex-1 shrink px-5 py-5 whitespace-nowrap rounded-xl bg-neutral-100 min-w-[240px] text-zinc-400">
                2025.01.16
            </div>
        </div>
    );
};

export default CategoryCourseSelector;