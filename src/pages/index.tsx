import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/Userinformation";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os Profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionanis da sua localidade"
        }
      />

      <UserInformation
        name={"Flavio de souza"}
        picture={"https://github.com/soulsurfe.png"}
        rating={3}
        description={"Fortaleza"}
      />
    </div>
  );
}
