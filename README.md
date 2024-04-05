### CK Editor Test
ck-editor를 테스트하는 레포지토리입니다.

### 사용법
```ecmascript 6
import {initEditor} from '@lorenleedev/ck-editor-test';
import '@lorenleedev/ck-editor-test/style.css';
import '@lorenleedev/ck-editor-test/editor.css';

// editor 생성하기
const [editor, setEditor] = useState(null);

const initialize = async () => {
  const editor = await initEditor({
    targetId: 'test',
    lang: 'en',
    initialData: '<p>test</p>',
  });
  setEditor(editor);
}
initialize();

// html
<div id="test"></div>

// editor에 데이터 넣기
editor.setData('<p>Hello world!</p>');

// editor에 데이터 가져오기
editor.getData();

// type 참고
interface EditorConfig = {
    targetId: string, // editor가 들어갈 HTMLElement의 id
    lang: 'en' | 'ko', // 언어 설정
    initialData: string, // 초기 데이터
}
```
