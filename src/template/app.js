document.getElementsByClassName('add_post_btn').addEventListener('click', addPost);

const App = () => {
    function addPost(){
        window.location.href=
        './template/modalPostTemplate/modalPostTemplate.html'
    }
}

export default App;