import React from 'react'

export default function Category() {
  const categoryArray = [
    "All",
    "News",
    "Film",
    "Autos",
    "Music",
    "Pets",
    "Sports",
    "Travel",
    "Gaming",
    "Comedy",
    "Entertainment",
    "News",
    "Education",
    "Science",
    "Nonprofits",
    "Python", "Django", "Flask", "Apis", "Java", "Javascript"
  ]



  return (
    <>
      <div className="container mt-3 mb-2 ms-3 ms-md-0 p-0 d-flex justify-content-start" style={{ overflowX: "scroll",width:"100%" }}>
        {categoryArray.map((item, index) => {
          return (
            <button key={index} className={`btn border-0 ${item === "All" ? "bg-dark text-white" : ""} me-2`} style={{ background: "#f2f2f2", fontWeight: "500", fontSize: "14px" }}>{item}</button>
          )
        })
        }
      </div>
    </>
  )
}
