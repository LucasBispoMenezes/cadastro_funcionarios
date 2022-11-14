import { useForm } from "react-hook-form";
import React from "react";
import { requestLogin } from "../helpers/requests";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setToken } from "../helpers/sessionStorage";
import { useNavigate } from "react-router-dom";
export const Login = () => {
    const navigate = useNavigate();
    const onSubmit = async (value) => {
        try {
            const { data } = await toast.promise(
                requestLogin("/usuario/login", value),
                {
                    pending: "Carregando...",
                    success: "Bem Vindo",
                }
            );
            await setToken(data.token);
            setTimeout(() => {
                navigate("/admin");
            }, 2000);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    const { handleSubmit, register } = useForm();
    return (
        <form onSubmit={handleSubmit(onSubmit)} method="post">
            <ToastContainer />
            <div class="form-group">
                <label htmlFor="username-input">
                    Usuario
                    <input
                        type="text"
                        id="username-input"
                        {...register("username", {
                            required: "Usuario Requerido",
                            minLength: 3,
                        })}
                        required
                        class="form-control"
                    />
                </label>
            </div>
            <div class="form-group">
                <label htmlFor="password-input">
                    Senha
                    <input
                        type="password"
                        name=""
                        id="password-input"
                        {...register("password")}
                        required
                        class="form-control"
                    />
                </label>
            </div>
            <input type="submit" class="btn btn-primary" />
        </form>
    );
};
