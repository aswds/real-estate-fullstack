import TextInput from "@components/styled/TextInput";
import Logo from "../../public/logo.svg";

function Auth() {
  return (
    <div className="flex-center h-screen m-auto ">
      <section className="h-1/2 bg-white p-10">
        <div className="h-36">
          <img src={Logo} loading="lazy" className="size-full" />
        </div>

        <TextInput label="email" onChange={() => {}} placeholder="email" />
        <TextInput
          label="password"
          onChange={() => {}}
          placeholder="password"
        />
      </section>
    </div>
  );
}

export default Auth;
