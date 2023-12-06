/** @format */

import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";

const AddItem = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="container mx-auto">
      <SectionTitle
        heading={"add an Item"}
        subheading="What's new "></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>First Name</label>
          <div className='form-control w-full my-6'>
            <label className='label'>
              <span className='label-text'>Recipe Name*</span>
            </label>
            <input
              type='text'
              placeholder='Recipe Name'
              {...register("name")}
              className='input input-bordered w-full '
            />
          </div>
          <div className='flex gap-6'>
            {/* category */}
            <div className='form-control w-full my-6'>
              <label className='label'>
                <span className='label-text'>Category*</span>
              </label>
              <select defaultValue='default'
                {...register("category")}
                className='select select-bordered w-full '>
                <option disabled value='default'>
                  Select a category
                </option>
                <option value='salad'>Salad</option>
                <option value='pizza'>Pizza</option>
                <option value='soup'>Soup</option>
                <option value='desert'>Desert</option>
                <option value='drinks'>Drinks</option>
              </select>
            </div>
            {/* price */}
            <div className='form-control w-full my-6'>
              <label className='label'>
                <span className='label-text'>Price*</span>
              </label>
              <input
                type='number'
                placeholder='Price'
                {...register("price")}
                className='input input-bordered w-full '
              />
            </div>
          </div>
          {/* recipe details */}
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Recipe Details</span>
            </label>
            <textarea
              {...register("recipe")}
              className='textarea textarea-bordered h-24'
              placeholder='Bio'></textarea>
          </div>
          {/* file input */}
          <div className='form-control w-full my-6'>
            <input
              {...register("image")}
              type='file'
              className='file-input w-full max-w-xs'
            />
          </div>
          <button className='btn bg-yellow-700 text-white'>
            Add Items <FaUtensils className='m-4'></FaUtensils>{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
