import type { NextApiRequest, NextApiResponse } from "next";
import { json } from "stream/consumers";
import { UserModel } from "../../models/UserModel";
import { DefaultMsgResponse } from "../../types/DefaultmsgResponse";
import { connect } from '../../middlewares/connectToMongoDB'

const registerEndpoint = async(req: NextApiRequest, res: NextApiResponse<DefaultMsgResponse>) => {
    try{
        if(req.method === 'POST' ){
            const {name, email, password} = req.body;
            if(!name || name.trim().lenght < 2){
                console.log(name.trim().lenght)
                return res.status(400).json({error: 'Nome não é valido'});
            }

            if(!email || email.trim().lenght < 5 || !email.includes('@') || !email.includes('.')){
                return res.status(400).json({error: 'Email não é valido'});
            }

            if(!password || password.trim().lenght < 6){
                return res.status(400).json({error: 'Password não é valido'});
            }

            const user = {
                name,
                email,
                password
            };
            await UserModel.create(user);
            return res.status(200).json({error: 'Usuario cadastrado com sucesso'})
        }
        return res.status(405).json({error: 'Método informado não existe'})

    }catch(e){
        console.log('Error on create user', e);
        return res.status(500).json({error: 'Não foi possível cadastrar o usuário'});
    }
}

export default connect(registerEndpoint);