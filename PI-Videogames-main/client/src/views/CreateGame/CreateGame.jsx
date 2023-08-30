

const CreateGame = () => {
    return (
      <main>
        <form action="form">
          <label for="name">Name:</label>
                <input type="text" id="name" name="name" required />
                
          <label for="description">Descriptios:</label>
                <input type="text" id="description" name="description" required />
                
                <label htmlFor=""></label>
        </form>
      </main>
    );
}

export default CreateGame;