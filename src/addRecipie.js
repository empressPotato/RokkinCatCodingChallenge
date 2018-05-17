import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Remove from 'material-ui/svg-icons/content/remove';


export default class AddRecipie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            name: '',
            amount: '',
            ingredients: [{ name: '', amount: '' }],
            steps: '',
        };
    }

    changeTitle(event) {
        this.setState({ title: event.value });
    }

    changeDescription(event) {
        this.setState({ description: event.value });
    }

    changeSteps(event) {
        this.setState({ steps: event.value });
    }

    changeIngredient(index, event) {
        const newIngredients = this.state.ingredients.map((ingredient, newIndex) => {
            if (index !== newIndex) return ingredient;
            // Make the new input the value of the ingridient at that index
            return { ingredient, name: event.value };
        });
        this.setState({ ingredients: newIngredients });
    }

    changeAmount(index, event) {
        const newAmount = this.state.ingredients.map((ingredient, newIndex) => {
            if (index !== newIndex) return ingredient;
            // Make the new amount the value of the ingridient at that index
            return { ingredient, amount: event.value };
        });
        this.setState({ ingredients: newAmount });
    }

    handleRemove(index) {
        this.setState({
            // Remove the value if it's index is the same as the pass in index
            ingredients: this.state.ingredients.filter((ingredient, newIndex) => index !== newIndex)
        });
    }

    handleAdd() {
        this.setState({
            // Concat returns a new array so React realizes something has changed because mutating does not guarentee that
            ingredients: this.state.ingredients.concat([{ name: '', amount: ''}])
        });
    }


    render() {
        return (
            <section>
                <h1>Add Recipie</h1>
                <TextField floatingLabelText="Title" onChange={() => this.changeTitle(this)} />

                <br /><TextField floatingLabelText="Description" onChange={() => this.changeDescription(this)}
                    multiLine={true} rows={4} />
                <br />



                {this.state.ingredients.map((ingredient, index) => (
                    <div>
                        <TextField key={`I${index}`}
                            floatingLabelText="Ingredient"
                            value={ingredient.name}
                            onChange={() => this.changeIngredient(index, this)} />

                        <TextField key={`A${index}`}
                            floatingLabelText="Amount"
                            value={ingredient.amount}
                            onChange={() => this.changeAmount(index, this)} />


                        <FloatingActionButton secondary={true} onClick={() => this.handleRemove(index)}>
                            <Remove />
                        </FloatingActionButton>
                        {/* <RaisedButton secondary={true} onClick={() => this.handleRemove(index)}>-</RaisedButton> */}

                    </div>
                ))}

                <RaisedButton primary={true} onClick={() => this.handleAdd()}>Add Ingredient</RaisedButton>




                <TextField floatingLabelText="Steps"
                    multiLine={true} rows={4}
                    onChange={() => this.changeSteps(this)} />


                {/* <RaisedButton onClick={this.submit()}>Add Recipie</RaisedButton> */}



            </section>

        );
    }



}
