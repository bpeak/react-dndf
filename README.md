# react-dndf
>Drag And Drop Files Component Package For React
# Installation
```
npm install --save react-dndf // for npm
yarn add react-dndf // for yarn
```
## Example
```
const React = require("react")
const reactDNDF = require("react-dndf")
const DropZone = reactDNDF(React)
class App extends React.Component{
	
	fileChangeHandler = (files) => {
		console.log("files : ", files)
	}
	
	return (
		<div>
			<DropZone onFileChange={this.fileChangeHandler}></DropZone>		
		</div>
	)
}
```