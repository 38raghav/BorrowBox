export default function UploadFrom(){
    return (
        
           <div class="row col-12 col-md-8 col-lg-8 mx-auto mt-3 mb-5  px-1">
                <br />
                <h3>Create a New Listing</h3>
                    <div class="mb-2">
                        <label for="title" class="form-label">Title</label>
                        <input name="title" type="text" class="form-control" id="title" required />
                        
                    </div>

                    <div class="mb-2">
                        <label for="description" class="form-label">Description</label>
                        <textarea name="description" class="form-control" id="description" required></textarea>
                        
                    </div>

                    <div class="mb-2">
                        <label for="image" class="form-label">Upload Image</label>
                        <input name="image" type="text" class="form-control" id="image" required />
                    </div>

                    <div class="d-flex gap-3 mb-2 p-0">
                        <div class="w-25">
                            <label for="price" class="form-label">Enter Price</label>
                            <input name="price" type="number" class="form-control" id="price" required />

                        </div>

                        <div class="w-75">
                            <label for="country" class="form-label">Enter Country</label>
                            <input name="country" type="text" class="form-control" id="country" required />
                          
                        </div>
                    </div>


                    <div class="mb-2">
                        <label for="location" class="form-label">Enter Location</label>
                        <input name="location" type="text" class="form-control" id="location" required />
                        
                    </div>

            
                    <button type="submit" class="btn btn-dark  add-btn">Add!</button><br></br>

            
            </div>
    )
}