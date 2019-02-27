# react-dndf
>Simple React component package for drag and drop files
# Installation
```
npm install --save react-dndf // for npm
yarn add react-dndf // for yarn
```
## Example
```javascript
const React = require("react")

const reactDNDF = require("react-dndf")
const DropZone = reactDNDF(React)
class App extends React.Component{
	
	fileChangeHandler = (files) => {
		// Handling selected files
		console.log("files : ", files)
	}
	
	render(){
		return (
			<div>
				<DropZone onFileChange={this.fileChangeHandler}>
					<div style={{ width : "100%", height : "100%", backgroundColor : "gray" }}> 
						Drag And Drop files Here !
					</div>
				</DropZone>		
			</div>
		)
	}
}
```
# Usage
```javascript
			// img cover
			<DropZone onFileChange={this.fileChangeHandler}>
				<img 
					style={{ width : "100%", height : "100%" }} 
					src={yourImgSrc}
				/>
			</DropZone>		
			
			// div cover
			<DropZone onFileChange={this.fileChangeHandler}>
				<div className="myCoverClassName">{yourText}</div>
			</DropZone>		
			
```
# Props
| Name             | Type          | arguments | Description                                       |
|------------------|---------------|-----------|---------------------------------------------------|
| onFileChange     | callback func | files     | Callback fired when a file is dragged and dropped |
| accept           | text          |           | HTML input tag accept Attribute                     |
| wrapperClassName | text          |           | className for DropZone wrapper                    |
| wrapperStyle     | object        |           | inline style for DropZone wrapper                 |
# Contributing

Contributions, questions and pull requests are all welcomed.
# License

Copyright (c) 2017.  [Bpeak](https://bpeakblog.com/)  [Licensed with The MIT License (MIT)](http://opensource.org/licenses/MIT)