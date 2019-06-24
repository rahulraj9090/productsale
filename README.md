#Use Cases

##Step 1: First of All, I am creating a design a HTML template, whois given in a PDF form

##Step 2: Install Angular 6+ and convert HTML Design into Angular with compnent

##Step3: work with components 
      Creating 2 components  
##1.	Home Component : This component have all calculation & Add to Cart details

##2.	Products Component: This is a product list component 
	Calling these component into a Root Component [App Component] with the help of selector
  
##Step 4: Use JSON data as a API
	Create a service to call the json data from Assets folder as a API
	../../assets/pos.products.json
  
##Step 5: Fetch data from Service
	Calling API data into products component with the help of subscribe method
  
##Step 6: Fetch data from one Component to another Component
	I am using Behavior Subject Module to communicate sibling’s components. This is a part of RxJS library.
  
##Step 7: Calculation (VAT Tax & Disscount)
	VAT_Tax = price * VAT / 100
	Disscount = price * Disscount / 100
	Tatal Price = (amount - Disscount) + VAT_Tax
  
##Step 8: Data Binding
	Bind all data with all calculation & bind data with Increment & Decrement Quantity of items
  
##Step 9: Cancel Sale
	Reset All value of choosing Items

##Step 9: Process Sale
	Create Popup window for Invoive
	Fetch Data from Component with pressing Process Sale Button

