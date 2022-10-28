export async function getData() {
  const API_Demo = 'https://demo.dataverse.org/api/search?q=mobile'
  // const API_Todo = 'https://jsonplaceholder.typicode.com/todos'
  const data = await (await fetch(API_Demo)).json()
  const name = 'utkarsh'
  return [data, name]
}
