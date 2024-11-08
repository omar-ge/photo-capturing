

document.querySelectorAll('.clk-ele').forEach(ele => {
    ele.addEventListener('click', () => {
        // console.log(ele);

        // Remove 'red' class from all shapes inside all clickable elements
        document.querySelectorAll('.clk-ele *').forEach(shape => {
            shape.classList.remove('selected-part');
        });
        
        document.querySelectorAll('.clk-ele').forEach(shape => {
            shape.classList.remove('selected-part');
        });


        if(ele.dataset.svgPartName != "" && ele.dataset.svgPartName != undefined) {
            // console.log(ele.dataset.svgPartName);
            document.querySelectorAll('.each-part').forEach(part => {
                if(part.dataset.partName == ele.dataset.svgPartName) {

                    document.querySelectorAll('.each-part').forEach(part => {
                        part.classList.remove('active')
                    })
                    part.classList.add('active')
                } 

            })
            
        } else {
            document.querySelectorAll('.each-part').forEach(part => {
                part.classList.remove('active')
            })
        }
        

        if (ele.tagName === 'g') {
            // console.log('group');
            // Add 'red' class to all child elements within the clicked group
            ele.querySelectorAll('*').forEach(shape => {
                shape.classList.add('selected-part');

                if(shape.dataset.svgPartName != "" && shape.dataset.svgPartName != undefined) {
                    // console.log(shape.dataset.svgPartName);
                    document.querySelectorAll('.each-part').forEach(part => {
                        if(part.dataset.partName == shape.dataset.svgPartName) {
                            
                            document.querySelectorAll('.each-part').forEach(part => {
                                part.classList.remove('active')
                            })
                            part.classList.add('active')
                        }
                    })
                    
                } else {
                    document.querySelectorAll('.each-part').forEach(part => {
                        part.classList.remove('active')
                    })
                }
                
            });
        } else {
            // console.log('shape');
            // If it's an individual element (like <path>, <circle>, etc.), apply 'red' to it directly
            ele.classList.add('selected-part');
        }
    });
});

document.querySelectorAll('.each-part').forEach(part => {
    part.addEventListener('click', () => {
        // console.log(part.dataset.partName);

        document.querySelectorAll('.each-part').forEach(part => {
            part.classList.remove('active')
        })
        part.classList.add('active')

        document.querySelectorAll('.clk-ele *').forEach(shape => {
            shape.classList.remove('selected-part');
        });
        
        document.querySelectorAll('.clk-ele').forEach(shape => {
            shape.classList.remove('selected-part');
        });

        document.querySelectorAll('svg *').forEach(ele => {

            if(ele.dataset.svgPartName != "" && ele.dataset.svgPartName != undefined) {
                // console.log(ele.dataset.svgPartName);
                if(part.dataset.partName == ele.dataset.svgPartName) {
                    ele.classList.add('selected-part')
                }
            }
        })

    })
})

