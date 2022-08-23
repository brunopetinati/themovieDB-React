import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { DefaultForm, StyledButton, StyledInput } from './styles'
import loginThunk from '../../store/modules/login/thunk'


const LoginForm = () => {

	const navigate = useNavigate(); 
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false)

  const schema = yup.object().shape({
    email: yup.string().email("Por favor, insira um email válido").required("This field is required"),

    password: yup
      .string()
      .min(4, "É necessário ao menos 4 dígitos")
      .required("Esse campo é necessário para prosseguir"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    dispatch(loginThunk(data, navigate));
    setLoading(true);
  };


  return (<>
      {loading ?  <h1 style={{color:'white'}}>Carregando...</h1> :
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <DefaultForm onSubmit={handleSubmit(handleForm)}>          
            <StyledInput placeholder="Email" name="email"
            autoComplete="off" 
            {...register("email", {
            required: "Required"
          })}></StyledInput>
            <div >{errors.email?.message} </div>
            <StyledInput
              placeholder="Senha"
              name="password"
              autoComplete="off"
              {...register("password", {
            required: "Required",
          })}
              type="password"
            ></StyledInput>
          <div >{errors.password?.message}</div>
          <br/>
          <StyledButton type="submit">Login</StyledButton>
        </DefaultForm>
      </motion.div>
    }
    </>
  );
};

export default LoginForm;