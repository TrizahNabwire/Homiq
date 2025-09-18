// src/components/AgentsSection.jsx
import React from "react";
import agents from "../../lib/agents";
import './agents.scss';


export default function Agents() {
  const handleMessage = (agent) => {
    const message = `Hello ${agent.name}, I am interested in your services.`;
    const whatsappUrl = `https://wa.me/${agent.phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
  return (
    <section className="section" id="agents">
      <h2 className="title">Meet Our Agents</h2>

      <div className="grid">
        {agents.map((agent) => (
          <div key={agent.id} className="card">
            <img
              src={agent.image}
              alt={agent.name}
              className="image"
            />
            <div className="content">
              <h3 className="name">{agent.name}</h3>
              <p className="locations">
                Locations: {agent.locations.join(", ")}
              </p>
            </div>
            <button
            className="message-btn"
            onClick={() => handleMessage(agent)}
          >Message</button>
          </div>
        ))}
      </div>
    </section>
  );
}
