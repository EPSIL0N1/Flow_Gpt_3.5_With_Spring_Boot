# FlowGPT: AI Menstrual Health Software

FlowGPT is a comprehensive online platform dedicated to women's health and wellness, incorporating AI-powered chatbot support for personalized guidance. The platform enables CRUD operations on patient reports using Spring Boot and React JS, integrated with a chatbot pipeline for efficient data processing.

## Folder Structure

- **FlowGPT (WebScrape)**: Streamlit application, the core part of the project.
- **fgpt (backend)**: Spring Boot application.
- **src**: Source folder for the React JS frontend for CRUD operations.

## Technologies Used

- Spring Boot
- React JS
- LangChain
- LLM (Llama3-70B)
- RAG
- Conversation Buffer Memory
- Groq AI
- OpenCV
- Streamlit
- MySQL

## Getting Started

Follow these steps to set up and run the project:

### Prerequisites

1. **MySQL WorkBench**: Install and set up MySQL WorkBench.
2. **IntelliJ IDEA**: Install IntelliJ IDEA for Spring Boot development.
3. **VSCode**: Install Visual Studio Code for React JS and LangChain development.
4. **Ollama**: Install Ollama for embeddings. You can use any other service if you want just make changes in the embedding part in 'FlowGPT(WebScrape)' file accordingly.

### Installation Steps

1. **Connect MySQL with Spring Boot**
   - Use Hibernate for the connection.
   - Run the Spring Boot application and use Postman to check if the connection is working properly.

2. **Set Up React JS**
   - Open the React JS code in VSCode. (Vite is used for optimization and faster application).
   - Use the command `npm run dev` to run the React JS code.

3. **Set Up Deep Learning Code**
   - Open the deep learning code in a new VSCode window. Streamlit is used for the basic design of the chatbot.
   - Create an account on [Groq](https://groq.com/).
   - Create a `.env` file in the same folder as `app.py` and set the Groq API key:
     ```
     GROQ_API_KEY=Your_API_KEY
     ```
   - Run the command `streamlit run app.py` to start the Streamlit application.

4. **Start Embedding Server**
   - Open the command prompt and type `ollama serve` to start the server for embeddings.

### Usage

1. Open the React web tab and close the Streamlit tab.
2. Enter your data and perform CRUD operations.
3. Navigate to the Streamlit interface for personalized menstrual health advice.

## Contact

For any queries, connect with me on [LinkedIn](https://www.linkedin.com/in/sourik-poddar-epsilon100/).

Thank you for using FlowGPT!
