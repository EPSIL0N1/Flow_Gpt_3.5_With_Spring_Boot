AI Menstrual Health Software

Designed a comprehensive online platform for women's health and
wellness, incorporating AI-powered chatbot support for personalized
guidance.
Performed CRUD operations on patient reports using Spring Boot and
React Js, integrating with the chatbot pipeline for efficient data
processing.
Technologies Used: Spring Boot, React Js, Lang Chain, LLM (Llama370B), RAG, Conversation Buffer Memory, Groq AI, Open CV, Streamlit,
MySQL.

FlowGpt(WebScrape) -> Streamlit Application -> Core Part of the Project
fgpt(backend) -> SpringBoot
src -> src folder of Reactjs (Frontend for CRUD operations)
 
Steps:
1. Install MySQL WorkBench
2. Install Intellij for Spring Boot
3. Install VsCode for ReactJs and LangChain
4. Install Ollama for embeddings. You can use any other if required.
5. Connect MySQL with Spring Boot -> I have used Hibernate
6. Run the application and use PostMan to check if the connection is working properly
7. Now come to VsCode and open the reactJs code. (I have used vite for optimization and faster application).
8. Use command "npm run dev" to run the code
9. Next open the Deep Learning Code in new vscode. I have used Streamlit for the basic design of chatbot.
10. Before running the code make an account in "https://groq.com/".
11. Create a .env file in the same folder of streamlit -> app.py and inside the .env file set "GROQ_API_KEY = *Your_API_KEY*"
12. Now you are good to go. Run the command "streamlit run app.py".
13. Open cmd and type "ollama serve" -> This will start the server for embeddings.
14. Thats it! Open react web tab and close streamlit tab. Enter your data. Perform CRUD operations and navigate to streamlit for Menstrual Health Advise!!
15. Thank You ! For any query connect me on -> https://www.linkedin.com/in/sourik-poddar-epsilon100/
