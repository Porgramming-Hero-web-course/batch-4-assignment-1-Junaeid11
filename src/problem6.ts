{
interface Profile{
    name: string,
    age: number,
    email: string
}
function updateProfile<T>(profile: T,whatUpdate: Partial<T>) {
            return {
                ...profile,
                ...whatUpdate
            }
}
const myProfile: Profile={
    name: 'alice',
    age:20,
    email: 'alice@example.com'

}
console.log(updateProfile(myProfile,{age : 250}))












}