import {test,expect} from '@playwright/test';
import NewTodoPage from '../pages/NewTodoPage';
import User from '../models/User';
import RegisterPage from '../pages/RegisterPage';
import TodoPage from '../pages/TodoPage';

test('should be able to add todo',async({page,request,context})=>{

    
  //register Using API
    const user= new User()
    const registerPage= new RegisterPage(page,request,context);
    await registerPage.registerUsingtheAPI(user);
    const newTodoPage= new NewTodoPage(page);
    await newTodoPage.load();
    await newTodoPage.addNewTask("newItem");
    const todoPage= new TodoPage(page);
    const todoText=await todoPage.getTodoTextByIndex(0);
    await expect(todoText).toEqual("newItem");

})


test('should be able to delete a todo',async({page,request,context})=>{
/*await page.goto('/signup');
   await page.getByTestId('first-name').fill(faker.person.firstName());
   await page.getByTestId('last-name').fill(faker.person.lastName());
   await page.getByTestId('email').fill(faker.internet.email());
   await page.getByTestId('password').fill('Test@@123');
   await page.getByTestId('confirm-password').fill('Test@@123');
   await page.click('[data-testid="submit"]');

   */
   const user= new User()
   const registerPage= new RegisterPage(page,request,context);
   await registerPage.registerUsingtheAPI(user) 
  /*register Using UserApi class
   const response=await new UserApi(request).register(user);
   
   const responseBody= await response.json();
   const accessToken= responseBody.access_token;
   const userID= responseBody.userID;
   const firstName=responseBody.firstName;

   //setting the token to be used by the TodoApi class
   user.setAccesToken(accessToken);
   //console.log(user.getAccessToken());
   

  // setting the cookies
   await context.addCookies([

    {
        name:'access_token',
        value: accessToken,
        url:'https://todo.qacart.com'
    },
     {
        name:'firstName',
        value: firstName,
        url:'https://todo.qacart.com'
    },
     {
        name:'userID',
        value: userID,
        url:'https://todo.qacart.com'
    }


]);*/
   //add a todo item using TodoApi class
    /*await page.click('[data-testid="add"]');
   await page.getByTestId('new-todo').fill('New Item');
   await page.click('[data-testid="submit-newTask"]');*/
   
   const newTodoPage= new NewTodoPage(page,request);
   await newTodoPage.addNewTaskUsingAPI(user);
   const todoPage= new TodoPage(page);
   await todoPage.load();
   await todoPage.deleteTodoByIndex(0);
   const noTodoMesage=todoPage.getNoTodosMessage();
   await expect(noTodoMesage).toBeVisible();
})