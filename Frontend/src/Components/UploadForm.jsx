export default function UploadFrom(){
    return (
        
           <div className="row col-12 col-md-8 col-lg-8 mx-auto mt-3 mb-5  px-1">
                <br />
                <h3>Create a New Listing</h3>
                    <div className="mb-2">
                        <label for="title" class="form-label">Title</label>
                        <input name="title" type="text" className="form-control" id="title" required />
                        
                    </div>

                    <div className="mb-2">
                        <label for="description" className="form-label">Description</label>
                        <textarea name="description" className="form-control" id="description" required></textarea>
                        
                    </div>

                    <div className="mb-2">
                        <label for="image" className="form-label">Upload Image</label>
                        <input name="image" type="text" className="form-control" id="image" required />
                    </div>

                    <div className="d-flex gap-3 mb-2 p-0">
                        <div className="w-25">
                            <label for="price" className="form-label">Enter Price</label>
                            <input name="price" type="number" className="form-control" id="price" required />

                        </div>

                        <div className="w-75">
                            <label for="country" className="form-label">Enter Country</label>
                            <input name="country" type="text" className="form-control" id="country" required />
                          
                        </div>
                    </div>


                    <div className="mb-2">
                        <label for="location" className="form-label">Enter Location</label>
                        <input name="location" type="text" className="form-control" id="location" required />
                        
                    </div>

            
                    <button type="submit" className="btn btn-dark  add-btn">Add!</button><br></br>

            
            </div>
    )
}