import {api} from "../scripts/api.js";

var talleres;
const getTalleres = async () => {
  talleres = await api.getTalleres();
  console.log(talleres);
};

export default function Talleres() {

  getTalleres();
  // console.log(talleres);

  return (
    <>
      <p>hola</p>
    </>
  );
}
