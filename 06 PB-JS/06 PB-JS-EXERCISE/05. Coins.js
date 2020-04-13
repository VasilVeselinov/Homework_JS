function calculateChangeAsTheNumberOfCoin(input) {
    let number = Number(input);
    let stotinki = parseInt(number * 100);
    let counterOfCoin = 0;
    while (stotinki > 0) {
        if (stotinki >= 200) {
            counterOfCoin++;
            stotinki = stotinki - 200;
        } else if (stotinki >= 100) {
            counterOfCoin++;
            stotinki = stotinki - 100;
        } else if (stotinki >= 50) {
            counterOfCoin++;
            stotinki = stotinki - 50;
        } else if (stotinki >= 20) {
            counterOfCoin++;
            stotinki = stotinki - 20;
        } else if (stotinki >= 10) {
            counterOfCoin++;
            stotinki = stotinki - 10;
        } else if (stotinki >= 5) {
            counterOfCoin++;
            stotinki = stotinki - 5;
        } else if (stotinki >= 2) {
            counterOfCoin++;
            stotinki = stotinki - 2;
        } else if (stotinki >= 1){
            counterOfCoin++;
            stotinki = stotinki - 1;
            break;
        }
    }
    console.log(counterOfCoin);
}

calculateChangeAsTheNumberOfCoin(1.23); // 4
calculateChangeAsTheNumberOfCoin(2); // 1
calculateChangeAsTheNumberOfCoin(0.56); // 3
calculateChangeAsTheNumberOfCoin(2.73); // 5
calculateChangeAsTheNumberOfCoin(3.88); // 8
calculateChangeAsTheNumberOfCoin(0.01); // 1
calculateChangeAsTheNumberOfCoin(0.02); // 1
calculateChangeAsTheNumberOfCoin(0.05); // 1
calculateChangeAsTheNumberOfCoin(0.10); // 1
calculateChangeAsTheNumberOfCoin(0.20); // 1
calculateChangeAsTheNumberOfCoin(0.50); // 1
calculateChangeAsTheNumberOfCoin(1); // 1