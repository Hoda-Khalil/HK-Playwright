import {APIRequestContext, expect} from '@playwright/test';
import User from '../models/User';

export default class TodoApi{
    private request:APIRequestContext;

    constructor(request:APIRequestContext)
    {
        this.request= request;
    }

    async addTodo(user:User)
    {
        const respone= await this.request.post('/api/v1/tasks',{
            data:{
                isCompleted: false,
                item: 'Playwright',
            },
            headers:{
                Authorization: `Bearer ${user.getAccessToken()}`

            }
        } );
        expect(respone.ok).toBeTruthy();
    }
}