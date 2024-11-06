{
interface Profile{
    name: string,
    age: number,
    email: string
}
function updateProfile<A>(profile: A,whatUpdate: Partial<A>) {
            return {
                ...profile,
                ...whatUpdate
            }
}
const myProfile: Profile={
    name: 'alice',
    age:25,
    email: 'alice@example.com'

}
// console.log(updateProfile(myProfile,{age :12}))












}