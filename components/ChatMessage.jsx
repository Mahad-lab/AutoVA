import React from "react";
import axios from "axios";
import { useEffect, useState } from 'react';

const ChatMessage = ({ message }) => {
  const isUserMessage = message.sender === "user";
  const createAgent = () => {
    var data = '{\n    "name": "Autonomous Virtual Assistant",\n    "description": "The Autonomous Virtual Assistant help users find the perfect product to sell. Using market analysis. We need to find right product, strategies to market and product that can be sold year round.",\n    "goal": Do the market research for products by asking questions and analyze which product is best for selling.,\n    "agent_workflow": "Goal Based Workflow", \n    "constraints": [\n        "If you are unsure how you previously did something or want to recall past events, thinking about similar events will help you remember.",\n        "Ensure the tool and args are as per current plan and reasoning",\n        "Exclusively use the tools listed under "TOOLS",\n        "REMEMBER to format your response as JSON, using double quotes ("") around keys and string values, and commas (,) to separate items in arrays and objects. IMPORTANTLY, to use a JSON object as a string in another JSON object, you need to escape the double quotes" ],\n    "instruction": [You need to search the best products for specific category],\n    "tools":[\n        {   \n            "name":"Google Search Toolkit", \n        },\n        {   \n            "name":"DuckDuckGo Search Toolkit"\n        }\n  {   \n            "name":"DuckDuckGo Search Toolkit"\n        }\n  ],\n    "iteration_interval": 500,\n    "model": "gpt-3.5-turbo",\n    "max_iterations": 20,\n    "schedule": null // Can be null for an agent without a schedule\n    // "schedule": { // Use this to run agent with a schedule\n    //     "start_time": "2023-08-14 21:32:00",\n    //     "recurrence_interval": "2 Hours",\n    //     "expiry_runs": 2,\n    //     "expiry_date": null\n    //   }\n}';

    var config = {
      method: "post",
      maxBodyLength: Infinity,  
      url: "https://app.superagi.com/api/v1/agent//", //{{URL}}/api/v1/agent/{agent_id}/run'
      headers: {
        "X-API-Key": "829637e2-b293-415b-9d6d-4c71dfb32e2b",
      },
      data: data,
    };
  
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    createAgent(); // Call the createAgent function when the component mounts
  }, []);

  return (
    <div className={`flex ${isUserMessage ? "justify-end" : ""} mb-4`}>
      <div
        className={`p-4 rounded-lg shadow-md ${
          isUserMessage ? "bg-violet-900 text-white" : "bg-white text-black"
        }`}
      >
        <p className="text-sm">{message.text}</p>
      </div>
    </div>
  );

};

export default ChatMessage;
