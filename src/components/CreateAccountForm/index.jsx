import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { DefaultForm, StyledButton , StyledInput } from "../LoginForm/styles"
import MuiButton from "../MuiButton/index";
import userThunk from "../../store/modules/create-account/thunk"


const CreateAccountForm = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [loading, setLoading] = useState(false)

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Esse campo é necessário para prosseguir"),
    email: yup.string().email("Por favor, insira um email válido").required("This field is required"),

    password: yup
      .string()
      .min(4, "É necessário ao menos 4 dígitos")
      .required("Esse campo é necessário para prosseguir"),

    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas não coincidem. Por favor, digite novamente."),
  });


  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });


  const handleForm = (createUserObject) => {
    dispatch(userThunk(createUserObject, navigate));
    setLoading(true);
  };



  return(<>
      { loading ? <h1 style={{color:'white'}}>Carregando...</h1> :
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
        <DefaultForm onSubmit={handleSubmit(handleForm)}>
        
            <StyledInput
              label="Name"
              name="name"
              autoComplete="off"
              placeholder="Nome de usuário"
              {...register("name", {
                required: "Required",
              })}
            />
          <div>{errors.name?.message}</div>
            <StyledInput
              label="Email"
              name="email"
              autoComplete="off"
              placeholder="Email"
              {...register("email", {
                required: "Required",
              })}
            />
          <div>{errors.email?.message}</div>
            <StyledInput
              label="Password"
              name="password"
              type="password"
              autoComplete="off"
              placeholder="Senha"
              {...register("password", {
                required: "Required",
              })}
            />
          <div>{errors.password?.message}</div>
            <StyledInput
              label="Password confirmation"
              name="password_confirmation"
              type="password"
              autoComplete="off"
              placeholder="Confirme a senha"
              {...register("password_confirmation", {
                required: "Required",
              })}
            />
          <div>{errors.passwordConfirm?.message}</div>
        <br/>
        <StyledButton type="submit">Criar Conta</StyledButton>
        
        </DefaultForm>
        <MuiButton open={false}/>
      </motion.div>
    }
  </>
  );
};

export default CreateAccountForm;