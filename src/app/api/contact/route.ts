
const resend = new Resend(process.env.NEXT_RESEND_API_KEY);



export const POST = async (req:Request) => {
    

    try {
        const {name, email , message} = await req.json()
await resend.emails.send({})
    } catch (error) {
        
    }
}
