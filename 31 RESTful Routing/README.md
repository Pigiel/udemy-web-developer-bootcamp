# RESTful Routes

A table of all 7 RESTful routes

| Name | Path | HTTP Method | Description | Mongoose Method |
| --- | --- | --- | --- | --- |
| Index | `/blogs` | `GET` | List all blog posts | Blog.find() |
| New | `/blogs/new` | `GET` | Show form for the new blog | N/A |
| Create | `/blogs` | `POST` | Create a new blog & then should redirect somewhere (e.g. `/blogs`) | Blog.create() |
| Show | `/blogs/:id` | `GET` | Show info about one specific blog | Blog.findById() |
| Edit | `/blogs/:id/edit` | `GET` | Show form to edit one blog | Blog.findById() |
| Update | `/blogs/:id` | `PUT` | Update a particular blog & then should redirect somewhere (e.g. `/blogs`) | Blog.findByIdAndUpdate() |
| Delete | `/blogs/:id` | `DELETE` | Delete a particular blog & then should redirect somewhere (e.g. `/blogs`) | Blog.findByIdAndRemove() |