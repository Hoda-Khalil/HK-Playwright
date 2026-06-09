
import {Page} from "@playwright/test";
import TodoApi from "../Apis/TodoApi";
import User from "../models/User";
import {APIRequestContext} from "@playwright/test";
export default class NewTodoPage{

private page:Page;
private request?:APIRequestContext;
constructor(page:Page,request?:APIRequestContext){
    this.page=page;
    this.request=request;
}

private get newTodoInput(){
    return this.page.locator('[data-testid="new-todo"]');
}

private get submitButton(){
    return this.page.locator('[data-testid="submit-newTask"]');
}
async load(){
    await this.page.goto('/todo/New');
}

async addNewTask(todo:string){
    await this.newTodoInput.fill(todo);
    await this.submitButton.click();
}
async addNewTaskUsingAPI(user:User){
     await new TodoApi(this.request!).addTodo(user);
}

}