// 임포트 구문을 사용할 경우 의존파일을 모두 내려 받은 뒤에 스크립트 실행
import MyModule from './MyModule';
import {ModuleName} from './MyModule';
import {ModuleName as RenameModuleName} from './MyModule';

function Func(){
    MyModule();
}

export const CONST_VALUE = 0;
export class MyClass{}
export default new Func();



