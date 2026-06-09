
import {Page} from '@playwright/test'
export default class TodoPage{

private page:Page;

//constructor
constructor(page:Page){
    this.page=page;
}
//elements
private get welcomeMessage(){
    return this.page.locator('[data-testid="welcome"]');
}
private get todoItems(){
    return this.page.locator('[data-testid="todo-item"]');
}
private get deleteIcon(){
    return this.page.locator('[data-testid="delete"]');
}
private get noTodosMessage(){
    return '[data-testid="no-todos"]';
}
//methods
async load(){
    await this.page.goto('/todo');
}
getWelcomeMessage(){
    return this.page.locator('[data-testid="welcome"]');
}

async getTodoTextByIndex(index:number){
    return await this.todoItems.nth(index).innerText();
}
async deleteTodoByIndex(index:number){
    await this.deleteIcon.nth(index).click();
}

 getNoTodosMessage(){
    return this.page.locator(this.noTodosMessage);
}
}