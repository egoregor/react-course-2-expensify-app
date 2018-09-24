import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({id: '123asd'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123asd'
    });
});
test('should setup edit expense action object', () => {
    const action = editExpense('123asd', {description: 'asd', createdAt: 10, note: 'asd'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123asd',
        updates: {
            description: 'asd', 
            createdAt: 10, 
            note: 'asd'
        }
    });
});
test('should setup add expense action object', () => {
    const expenseData = {
        description: 'asdasd',
        amount: 100,
        createdAt: 100,
        note: 'note'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});
test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0
        }
    });
});