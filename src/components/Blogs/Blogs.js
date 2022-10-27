import React from 'react';
import Card from 'react-bootstrap/Card';

const Blogs = () => {
    return (
        <div className="blog">
            <Card className="mb-5">
                <Card.Header>
                    <h5>Question: What is cors?</h5>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS rules are used to manage cross-origin requests between a client side request trying to retrieve a resource deployed in a different origin than its own (domain, protocol, or port). CORS rules are not meant to filter incoming 3rdParty application requests, the requests will not be blocked by the CORS rules.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="mb-5">
                <Card.Header>
                    <h5>Question: Why i am using firebase? What other options do you have to implement authentication?</h5>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        Firebase is an app development platform that helps you build and grow apps and games users love. Backed by Google and trusted by millions of businesses around the world. Firebase provides tools to grow your app and business, for startups & global enterprises. Get your app up and running quickly & securely with fully managed backend infrastructure. 15+ Products & Solutions. Build Fast For Any Device. Build Extraordinary Apps
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="mb-5">
                <Card.Header>
                    <h5>Question: How does the private route work?</h5>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        The private route component is used to protect selected pages in a React app from unauthenticated users.The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="mb-5">
                <Card.Header>
                    <h5>Question: What is Node? How does Node work?</h5>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        A node is a basic unit of a data structure, such as a linked list or tree data structure. Nodes contain data and also may link to other nodes. Links between nodes are often implemented by pointers.
                        <br />
                        Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blogs;