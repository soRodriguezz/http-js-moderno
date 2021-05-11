const jokeUrl = "https://api.chucknorris.io/jokes/random";
const urlUsuarios = "https://reqres.in/api/users?page=2";

const cloudPresent = "c5odwf1j";
const cloudUrl = "https://api.cloudinary.com/v1_1/dvxclwl5g/upload";

const obtenerChiste = async () => {
  try {
    const resp = await fetch(jokeUrl);
    if (!resp.ok) throw "No se pudo realizar la peticion";

    //* Desestructuracion
    const { icon_url, id, value } = await resp.json();

    // return await resp.json();
    return { icon_url, id, value };
  } catch (err) {
    throw err;
  }
};

const obtenerUsuarios = async () => {
  const resp = await fetch(urlUsuarios);
  const { data: usuarios } = await resp.json();

  return usuarios;
};

// ArchivoSubir :: File
const subirImagen = async (archivoSubir) => {
  const formData = new FormData();
  formData.append("upload_preset", cloudPresent);
  formData.append("file", archivoSubir);

  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });
    if (resp.ok) {
      const cloudResp = await resp.json();
      // console.log(cloudResp);
      return cloudResp.secure_url;
    }
  } catch (err) {
    throw await resp.json();
  }
};

export { obtenerChiste, obtenerUsuarios, subirImagen };
