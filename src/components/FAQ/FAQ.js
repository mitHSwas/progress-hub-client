import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <div>
            <h1 className='text-center mb-4'>Frequently Asked Questions</h1>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How Data Science differs from Big Data and Data Analytics?</Accordion.Header>
                    <Accordion.Body>
                        Big data analysis caters to a large amount of data set which is also known as data mining, but data science makes use of the machine learning algorithms to design and develop statistical models to generate knowledge from the pile of big data.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why data cleansing is important?</Accordion.Header>
                    <Accordion.Body>
                        Having clean data will ultimately increase overall productivity and allow for the highest quality information in your decision-making. Benefits include: Removal of errors when multiple sources of data are at play. Fewer errors make for happier clients and less-frustrated employees.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Why data cleansing is important?</Accordion.Header>
                    <Accordion.Body>
                        Having clean data will ultimately increase overall productivity and allow for the highest quality information in your decision-making. Benefits include: Removal of errors when multiple sources of data are at play. Fewer errors make for happier clients and less-frustrated employees.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What Are the Different Types of Machine Learning?</Accordion.Header>
                    <Accordion.Body>
                        Machine learning is a subset of AI, which enables the machine to automatically learn from data, improve performance from past experiences, and make predictions. Machine learning contains a set of algorithms that work on a huge amount of data. Data is fed to these algorithms to train them, and on the basis of training, they build the model & perform a specific task.These ML algorithms help to solve different business problems like Regression, Classification, Forecasting, Clustering, and Associations, etc.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>What is a backup in cyber security?</Accordion.Header>
                    <Accordion.Body>
                        Backups are copies of computer data, such as contracts, drawings, recipes, forecasts, quality data, compensation plans, and other contents stored on a hard drive. The verb backup means to make a copy of a computer file or other data to protect against accidental loss or corruption.Backup refers to the copying of physical or virtual files or databases to a secondary location for preservation in case of equipment failure or catastrophe. The process of backing up data is pivotal to a successful disaster recovery plan
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>What are the benefits of blockchain technology?</Accordion.Header>
                    <Accordion.Body>
                        Verifiable: Blockchain technology is used to store information in a decentralized manner so everyone can verify the correctness of the information by using zero-knowledge proof through which one party proves the correctness of data to another party without revealing anything about data
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>What is Artificial Intelligence?</Accordion.Header>
                    <Accordion.Body>
                        Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                    <Accordion.Header>What is a Document in MongoDB?</Accordion.Header>
                    <Accordion.Body>
                        What is a Document in MongoDB? Document - a way to organize and store data as a set of field-value pairs. Field - a unique identifier for a datapoint. Value - data related to a given identifier. Collection - an organized store of documents in MongoDB, usually with common fields between documents.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                    <Accordion.Header>What are Databases in MongoDB?</Accordion.Header>
                    <Accordion.Body>
                        MongoDB is a non-relational document database that provides support for JSON-like storage. The MongoDB database has a flexible data model that enables you to store unstructured data, and it provides full indexing support, and replication with rich and intuitive APIs.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                    <Accordion.Header>Are data visualization and information visualization same things?</Accordion.Header>
                    <Accordion.Body>
                        The line of distinction is actually pretty blurry, but this can help you better grasp the difference: Information design is data used as a storytelling tool. It's data with a purpose. Therefore, Information visualizations are more about informing the viewer about a data set and it's specific parts
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="10">
                    <Accordion.Header>Why do i need cloud strategy?</Accordion.Header>
                    <Accordion.Body>
                        A cloud strategy is essential to guide your organization through the transition to the cloud by balancing expected benefits with guardrails to reduce risk exposure. Without a strategy, business groups and users will adopt solutions to increase productivity as they become available
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQ;