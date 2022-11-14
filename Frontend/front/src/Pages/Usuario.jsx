import { useForm } from "react-hook-form";
import { useContext } from "react";
import cadastroContext from "../context/contextCadastros";

function Usuario() {
    const { register, watch } = useForm();
    const { addNewData } = useContext(cadastroContext);
    return (
        <form>
            <div className="form-group">
                <label for="username">Username</label>
                <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="username"
                    {...register("username")}
                />
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Endereço de email</label>
                <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Seu email"
                    {...register("email")}
                />
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Senha</label>
                <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Senha"
                    {...register("password")}
                />
            </div>
            <div className="form-group">
                <label htmlFor="">
                    Função
                    <select
                        name=""
                        id=""
                        className="form-select"
                        {...register("role")}
                    >
                        <option value="user">user</option>
                        <option value="admin">admin</option>
                    </select>
                </label>
            </div>
            <div>
                <button
                    type="submit"
                    /*  */ className="btn btn-primary mt-2"
                    onClick={(e) => {
                        e.preventDefault();
                        //addNewData(watch())
                        console.log(watch());
                    }}
                >
                    Enviar
                </button>
            </div>
        </form>
    );
}

export default Usuario;
