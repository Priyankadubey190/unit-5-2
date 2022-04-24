export const Dashboard = ()=>{
var arr = [
    {
        "top_left": "Active users",
        "top_right": "for august 2020",
        "image": "https://media.gettyimages.com/photos/cotton-boll-macro-picture-id157502132?k=20&m=157502132&s=612x612&w=0&h=SPtRyaAVbZSGc3DK3SSMj2O4GD3vOqi_trZXC5Vyfr8=",
        "name": "Nrupul Dev",
        "place": "Banglore,india",
        "professional": "Professional Level 15"
    },
    {
        "top_left": "Active users",
        "top_right": "for august 2020",
        "image": "https://media.gettyimages.com/photos/cotton-boll-macro-picture-id157502132?k=20&m=157502132&s=612x612&w=0&h=SPtRyaAVbZSGc3DK3SSMj2O4GD3vOqi_trZXC5Vyfr8=",
        "name": "Sandhya",
        "place": "Banglore,india",
        "professional": "Professional Level 11"
    },
    {
        "top_left": "Active users",
        "top_right": "for august 2020",
        "image": "https://media.gettyimages.com/photos/cotton-boll-macro-picture-id157502132?k=20&m=157502132&s=612x612&w=0&h=SPtRyaAVbZSGc3DK3SSMj2O4GD3vOqi_trZXC5Vyfr8=",
        "name": "Elon Tusk",
        "place": "Kalifornia,USA",
        "professional": "Professional Level 6"
    }
]
return (
    <div>
        {arr.map((e)=>{
            return (
                <div style={{boxShadow: "2px 3px 3px lightgrey",padding: "20px",
                margin:"10px",width:"350px"}}>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <b>{e.top_left}</b>
                    <span>{e.top_right}</span>
                </div>
                <div style={{display:"flex",alignItems:"center"}}>
                    <img src={e.image} alt="" />
                <div>
                <b>{e.name}</b> 
                <p style={{marginTop:"0px"}}>{e.place}</p>
                </div>
                </div>
                </div>   
            )
        })}
    </div>
)

}