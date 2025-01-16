import React, { useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import reactLogo from '@/assets/react.svg'

const ToastEditor = ({ setBody }) => {
  const editorRef = useRef();

  const onChangeGetHTML = () => {
    // 에디터에 입력된 내용을 HTML 태그 형태로 취득
    const data = editorRef.current.getInstance().getHTML();
    // Body에 담기
    setBody(data);
  };

  
  return (
      <Editor
        toolbarItems={[
          // 툴바 옵션 설정
          ['heading', 'bold', 'italic', 'strike'],
          ['hr', 'quote'],
          ['ul', 'ol', 'task', 'indent', 'outdent'],
          ['table', 'image', 'link'],
          ['code', 'codeblock']
        ]}
        height="300px" // 에디터 창 높이
        initialEditType="wysiwyg" // 기본 에디터 타입 (or wysiwyg)
        indent="true" // 들여쓰기 단위
        // previewStyle="vertical" // 미리보기 스타일 (or tab) (verttical은 양쪽이 나뉨)
        // addImageBlobHook={(file, callback) => {
        //   // file: Blob 객체
        //   // callback: 콜백 함수
        //   const formData = new FormData();
        //   formData.append('image', file);
        //   saveImage(formData).then((response) => {
        //     const { data } = response;
        //     const url = data.url;
        //     callback(url, 'alt text');
        //   });

        // }}
        hooks={{
          addImageBlobHook: async (blob, callback) => {
            callback(reactLogo, '');
          }
        }}
        
        ref={editorRef} // ref 참조
        onChange={onChangeGetHTML} // onChange 이벤트
      >
      </Editor>
  );
}

export default ToastEditor;