// localhost:3000/api/users

export async function GET(request){

    const users = [
        {id: 1, name: "John"},
        {id: 2, name: "Alio"},
    ]
    return new Response(JSON.stringify(users))
}