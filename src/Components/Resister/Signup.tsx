

const SignUp = () => {
    return (
        <div>

<button className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>open modal</button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click outside to close</p>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog> 
        </div>
    );
};

export default SignUp; 