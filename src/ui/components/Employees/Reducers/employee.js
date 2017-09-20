export const employee = (state = {employeeData:{}}, action) => {
  switch (action.type) {
     case 'MODIFY_EMPLOYEE_PENDING':
      return { status:action.status, employeeData: action.employeeData }  
      case 'MODIFY_EMPLOYEE_SUCCESS':
      return { status:action.status, employeeData: {} }  
    default:
      return state
  }
}
