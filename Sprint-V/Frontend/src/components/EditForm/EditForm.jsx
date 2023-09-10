import './styles.css';
import { Button } from "antd";
import useEditStore from "../../stores/useEditStore"; // Importa el estado global

function EditForm() {
  // Obtén el objeto product del estado global
  const editStore = useEditStore();
  const { product } = editStore;

  return (
    <div className='edit_box'>
      <img src={product.image} alt="" />
      <div className="edit_input">
        <label htmlFor="edit-new-title">New Title</label>
        <textarea
          name="edit-new-title"
          id="edit-new-title"
          cols="25"
          rows="2"
          defaultValue={product.title} // Establece el valor por defecto desde el estado global
        />
      </div>
      <div className="edit_input">
        <label htmlFor="edit-new-price">New Price</label>
        <input
          type="number"
          name="edit-new-price"
          id="edit-new-price"
          defaultValue={product.price} // Establece el valor por defecto desde el estado global
        />
      </div>
      <div className="edit_input_description">
        <label htmlFor="edit-new-description">New Description</label>
        <textarea
          name="edit-new-description"
          id="edit-new-description"
          cols="40"
          rows="5"
          defaultValue={product.description} // Establece el valor por defecto desde el estado global
        />
      </div>
      <div className="edit_input">
        <label htmlFor="edit-new-category">New Category</label>
        <input
          type="text"
          name="edit-new-category"
          id="edit-new-category"
          defaultValue={product.category} // Establece el valor por defecto desde el estado global
        />
      </div>
      <div className="edit_input">
        <label htmlFor="edit-new-image">New Image</label>
        <textarea
          name="edit-new-image"
          id="edit-new-image"
          cols="25"
          rows="2"
          defaultValue={product.image} // Establece el valor por defecto desde el estado global
        />
      </div>
      <div className='edit_button'>
        <Button style={{width:"100px", textAlign:"center", fontWeight: "bold" }} type='primary' size='large'>Edit!</Button>
      </div>
    </div>
  );
}

export default EditForm;
