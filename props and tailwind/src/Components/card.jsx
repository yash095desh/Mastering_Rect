
function Card(props){
    return(<>
    <div className=" bg-blue-400 text-black flex flex-col justify-center items-center p-5 w-2/4 rounded-3xl my-10 mx-auto ">
        <img src={props.img}  className="h-80 rounded-xl" alt="" />
        <h2 className="m-2 font-[Roboto] text-xl">Lorem ipsum dolor sit amet.</h2>
        <p className="text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit cupiditate delectus aliquam molestiae voluptas repellendus, velit sunt pariatur ad. Inventore at dignissimos saepe?</p>
        <h3 className="text-xl font-semibold">{props.username}</h3>
    </div>
    </>)
}
export default Card