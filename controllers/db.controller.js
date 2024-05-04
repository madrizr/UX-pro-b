
// Ruta para mostrar la lista de contactos
const getContacts = async (req, res) => {
    try {
        const querySnapshot = await db.collection("contacts").get();
        const contacts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        res.render("index", { contacts });
      } catch (error) {
        console.error(error);
      }
}

// Ruta para agregar un nuevo contacto
const addContact = async (req, res) => {
    const { firstname, lastname, email, phone } = req.body;
  await db.collection("contacts").add({
    firstname,
    lastname,
    email,
    phone,
  });
  res.redirect("/");
}

// Ruta para eliminar un contacto
const DeleteContact = async (req, res) => {
    await db.collection("contacts").doc(req.params.id).delete();
    res.redirect("/");
}

// Ruta para editar un contacto
const PutContact = async (req,res) => {
    const doc = await db.collection("contacts").doc(req.params.id).get();
    res.render("index", { contact: { id: doc.id, ...doc.data() } });
}

const saveContact = async (req,res) => {
    const { firstname, lastname, email, phone } = req.body;
    const { id } = req.params;
    await db
        .collection("contacts")
        .doc(id)
        .update({ firstname, lastname, email, phone });
    res.redirect("/");
}

module.exports = {
    addContact,
    saveContact,
    DeleteContact,
    PutContact,
    getContacts
}