import { Space, Table } from "antd";

const { Column } = Table;
const data = [
  {
    key: "1",
    Identifiant: "Victor Fabier",
    adresseMail: "pereCastor@gmail.com",
    motDePasse: "ILoveChatGPT",
  },
  {
    key: "2",
    Identifiant: "Enzo Castagnos",
    adresseMail: "GwosBaiseuw@Tinder.org",
    motDePasse: "JaimeLesFemmesEtLePâté",
  },
  {
    key: "3",
    Identifiant: "Badis Beloucif",
    adresseMail: "BGdu69@Wanadoo.fr",
    motDePasse: "jambesDeCoq",
  },
];
function AdminGerer() {
  return (
    <div className=" mt-10 py-10 flex justify-center">
      <Table dataSource={data}>
        <Column title="Identifiant" dataIndex="Identifiant" key="Identifiant" />
        <Column title="E-Mail" dataIndex="adresseMail" key="adressMail" />
        <Column title="Mot De Passe" dataIndex="motDePasse" key="motDePasse" />
        <Column
          title="Gerer"
          key="action"
          render={() => (
            <Space size="middle">
              <a href="tjjh">Modifier </a>
              <a href="tgherf">Supprimer</a>
            </Space>
          )}
        />
      </Table>
    </div>
  );
}
export default AdminGerer;
