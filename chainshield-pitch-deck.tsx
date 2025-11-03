import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Shield, Globe, TrendingUp, Users, Zap, DollarSign, Target, Award, Rocket, Lock } from 'lucide-react';

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState('fr');

  const slides = {
    fr: [
      {
        title: "ChainShield.MA",
        subtitle: "La confiance numérique des chaînes industrielles africaines",
        content: (
          <div className="text-center space-y-8">
            <div className="relative">
              <Shield className="w-32 h-32 mx-auto text-blue-500 animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-blue-500 rounded-full opacity-20 animate-ping"></div>
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-800">Protégez votre supply chain contre les cybermenaces</p>
            <div className="text-lg text-gray-600 space-y-2">
              <p>🏆 Huawei Cloud ICT Competition 2025</p>
              <p>📍 Casablanca, Morocco</p>
            </div>
            <div className="grid grid-cols-5 gap-4 mt-8 text-sm">
              <div className="bg-blue-50 p-3 rounded">
                <p className="font-bold">Kaouthar</p>
                <p className="text-xs text-gray-600">CEO & Product</p>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <p className="font-bold">Reda</p>
                <p className="text-xs text-gray-600">Security Lead</p>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <p className="font-bold">Abdellatif</p>
                <p className="text-xs text-gray-600">Cloud Architect</p>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <p className="font-bold">Ikram</p>
                <p className="text-xs text-gray-600">AI Engineer</p>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <p className="font-bold">Mouad</p>
                <p className="text-xs text-gray-600">Frontend Dev</p>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Le Problème",
        subtitle: "Une menace invisible qui coûte des millions",
        content: (
          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
              <p className="text-xl font-bold text-red-700 mb-2">🚨 61% des cyberattaques passent par les fournisseurs</p>
              <p className="text-gray-700">Source: IBM Security Report 2024</p>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-3xl font-bold text-red-600">4.5M$</p>
                <p className="text-sm text-gray-600">Coût moyen d une attaque supply chain</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-3xl font-bold text-orange-600">287 jours</p>
                <p className="text-sm text-gray-600">Temps moyen de détection</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-3xl font-bold text-yellow-600">40%</p>
                <p className="text-sm text-gray-600">Entreprises marocaines non protégées</p>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg mt-6">
              <p className="font-bold text-lg mb-3">Cas réel : Attaque NotPetya (2017)</p>
              <ul className="space-y-2 text-gray-700">
                <li>✗ Origine : fournisseur logiciel ukrainien compromis</li>
                <li>✗ Impact : 10 milliards $ de dégâts mondiaux</li>
                <li>✗ Victimes : Maersk, FedEx, Merck...</li>
                <li className="text-red-600 font-bold">✗ Aucun outil ne surveillait ce fournisseur</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        title: "La Solution ChainShield",
        subtitle: "Visualisez, Évaluez, Protégez",
        content: (
          <div className="space-y-6">
            <p className="text-xl text-center text-gray-700">Plateforme SaaS d évaluation des risques cyber dans votre supply chain</p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg">
                <Globe className="w-12 h-12 mb-4" />
                <p className="font-bold text-lg mb-2">Cartographie 3D</p>
                <p className="text-sm">Visualisez toutes vos relations fournisseurs en temps réel</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg">
                <Zap className="w-12 h-12 mb-4" />
                <p className="font-bold text-lg mb-2">Scoring IA</p>
                <p className="text-sm">Algorithme intelligent de notation des risques cyber</p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg">
                <Lock className="w-12 h-12 mb-4" />
                <p className="font-bold text-lg mb-2">Monitoring 24/7</p>
                <p className="text-sm">Alertes instantanées sur les vulnérabilités détectées</p>
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="font-bold text-lg mb-3">🎯 Workflow en 4 étapes :</p>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-white p-3 rounded shadow">
                  <p className="font-bold text-blue-600">1. Connectez</p>
                  <p className="text-xs text-gray-600 mt-1">Importez vos fournisseurs</p>
                </div>
                <div className="bg-white p-3 rounded shadow">
                  <p className="font-bold text-blue-600">2. Scannez</p>
                  <p className="text-xs text-gray-600 mt-1">OSINT + CVE + Shodan</p>
                </div>
                <div className="bg-white p-3 rounded shadow">
                  <p className="font-bold text-blue-600">3. Analysez</p>
                  <p className="text-xs text-gray-600 mt-1">IA calcule le score</p>
                </div>
                <div className="bg-white p-3 rounded shadow">
                  <p className="font-bold text-blue-600">4. Agissez</p>
                  <p className="text-xs text-gray-600 mt-1">Rapport + Actions</p>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Démo Interface",
        subtitle: "Dashboard & Visualisation 3D",
        content: (
          <div className="space-y-4">
            <div className="bg-gray-900 p-6 rounded-lg text-white">
              <div className="flex justify-between items-center mb-4">
                <p className="font-bold">Dashboard ChainShield</p>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3 mb-4">
                <div className="bg-gray-800 p-3 rounded">
                  <p className="text-2xl font-bold text-green-400">156</p>
                  <p className="text-xs text-gray-400">Fournisseurs sécurisés</p>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <p className="text-2xl font-bold text-yellow-400">23</p>
                  <p className="text-xs text-gray-400">Alertes moyennes</p>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <p className="text-2xl font-bold text-red-400">7</p>
                  <p className="text-xs text-gray-400">Risques critiques</p>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <p className="text-2xl font-bold text-blue-400">8.2/10</p>
                  <p className="text-xs text-gray-400">Score global</p>
                </div>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <p className="text-sm mb-2">🔴 Alerte critique détectée</p>
                <p className="text-xs text-gray-400">Fournisseur: TechSupply.ma | CVE-2024-1234 non patchée</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-900 to-purple-900 p-6 rounded-lg text-white">
              <p className="font-bold mb-3">Visualisation 3D (Three.js)</p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-green-500 bg-opacity-20 p-3 rounded">
                  <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-2"></div>
                  <p className="text-xs">Score: 9.5/10</p>
                </div>
                <div className="bg-blue-500 bg-opacity-20 p-3 rounded scale-125">
                  <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-2 animate-pulse"></div>
                  <p className="text-sm font-bold">VOTRE ENTREPRISE</p>
                </div>
                <div className="bg-red-500 bg-opacity-20 p-3 rounded">
                  <div className="w-12 h-12 bg-red-500 rounded-full mx-auto mb-2"></div>
                  <p className="text-xs">Score: 3.2/10 ⚠️</p>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Architecture Huawei Cloud",
        subtitle: "Infrastructure sécurisée et scalable",
        content: (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4 rounded-lg text-center">
              <p className="text-2xl font-bold">🏆 Powered by Huawei Cloud</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border-2 border-red-500 p-4 rounded-lg">
                <p className="font-bold text-red-600 mb-3">Services Huawei utilisés :</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span><strong>ModelArts</strong> - IA Scoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span><strong>RDS PostgreSQL</strong> - Base données</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span><strong>ECS</strong> - Hébergement apps</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span><strong>OBS</strong> - Stockage rapports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span><strong>WAF + Anti-DDoS</strong> - Protection</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-bold mb-3">Stack Technique :</p>
                <div className="space-y-2 text-sm">
                  <div className="bg-blue-100 px-3 py-1 rounded">Frontend: Next.js + Three.js</div>
                  <div className="bg-purple-100 px-3 py-1 rounded">Backend: Python FastAPI</div>
                  <div className="bg-green-100 px-3 py-1 rounded">AI: Scikit-learn + HuggingFace</div>
                  <div className="bg-yellow-100 px-3 py-1 rounded">OSINT: Shodan + CVE Feeds</div>
                  <div className="bg-red-100 px-3 py-1 rounded">Security: JWT + RBAC</div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-bold mb-2">🎯 Avantages Huawei Cloud :</p>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="bg-white p-2 rounded text-center">
                  <p className="font-bold text-blue-600">Scalabilité</p>
                  <p className="text-xs text-gray-600">Auto-scaling ECS</p>
                </div>
                <div className="bg-white p-2 rounded text-center">
                  <p className="font-bold text-green-600">Sécurité</p>
                  <p className="text-xs text-gray-600">Certifié ISO 27001</p>
                </div>
                <div className="bg-white p-2 rounded text-center">
                  <p className="font-bold text-purple-600">IA Managée</p>
                  <p className="text-xs text-gray-600">ModelArts intégré</p>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Roadmap",
        subtitle: "6 mois jusqu au lancement",
        content: (
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">M1</div>
                <div className="bg-blue-50 p-4 rounded-lg flex-1">
                  <p className="font-bold text-blue-700">Nov 2024 - MVP Hackathon</p>
                  <p className="text-sm text-gray-700">Dashboard + Scoring IA + Démo 3D + Huawei Cloud integration</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">M2</div>
                <div className="bg-purple-50 p-4 rounded-lg flex-1">
                  <p className="font-bold text-purple-700">Déc 2024 - Backend complet</p>
                  <p className="text-sm text-gray-700">API REST + Base PostgreSQL + Intégration Shodan/CVE</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">M3</div>
                <div className="bg-green-50 p-4 rounded-lg flex-1">
                  <p className="font-bold text-green-700">Jan 2025 - Interface complète</p>
                  <p className="text-sm text-gray-700">Dashboard avancé + Graphe 3D interactif + Rapports PDF</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">M4</div>
                <div className="bg-orange-50 p-4 rounded-lg flex-1">
                  <p className="font-bold text-orange-700">Fév 2025 - Tests pilotes</p>
                  <p className="text-sm text-gray-700">3 entreprises bêta-testers (banque, télécom, industrie)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">M5</div>
                <div className="bg-red-50 p-4 rounded-lg flex-1">
                  <p className="font-bold text-red-700">Mars 2025 - Optimisation</p>
                  <p className="text-sm text-gray-700">Feedback clients + Amélioration IA + Sécurité renforcée</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">M6</div>
                <div className="bg-yellow-50 p-4 rounded-lg flex-1">
                  <p className="font-bold text-yellow-700">Avril 2025 - Lancement commercial</p>
                  <p className="text-sm text-gray-700">Version SaaS publique + Campagne marketing Maroc</p>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Call to Action",
        subtitle: "Rejoignez la révolution de la cybersécurité supply chain",
        content: (
          <div className="text-center space-y-8">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
              <Rocket className="w-24 h-24 mx-auto mb-4 animate-bounce" />
              <p className="text-3xl font-bold mb-4">Nous construisons le futur de la sécurité industrielle africaine</p>
              <p className="text-xl">ChainShield.MA × Huawei Cloud</p>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <Award className="w-12 h-12 mx-auto mb-3 text-green-600" />
                <p className="font-bold text-lg">Gagnons ensemble</p>
                <p className="text-sm text-gray-600 mt-2">Huawei ICT Competition 2025</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <Users className="w-12 h-12 mx-auto mb-3 text-blue-600" />
                <p className="font-bold text-lg">Partenariats</p>
                <p className="text-sm text-gray-600 mt-2">Investisseurs, clients pilotes recherchés</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <Target className="w-12 h-12 mx-auto mb-3 text-purple-600" />
                <p className="font-bold text-lg">Vision 2026</p>
                <p className="text-sm text-gray-600 mt-2">Leader cybersécurité supply chain Afrique</p>
              </div>
            </div>
            <div className="bg-gray-900 text-white p-8 rounded-lg">
              <p className="text-2xl font-bold mb-4">📧 Contact</p>
              <p className="text-lg mb-2">kaouthar@chainshield.ma</p>
              <p className="text-sm text-gray-400">Team ChainShield - Casablanca, Morocco</p>
              <div className="mt-6 flex justify-center gap-4">
                <div className="bg-blue-600 px-6 py-3 rounded-lg font-bold cursor-pointer hover:bg-blue-700 transition">
                  Demander une démo
                </div>
                <div className="bg-purple-600 px-6 py-3 rounded-lg font-bold cursor-pointer hover:bg-purple-700 transition">
                  Rejoindre la bêta
                </div>
              </div>
            </div>
          </div>
        )
      }
    ],
    en: [
      {
        title: "ChainShield.MA",
        subtitle: "Digital Trust for African Industrial Supply Chains",
        content: (
          <div className="text-center space-y-8">
            <div className="relative">
              <Shield className="w-32 h-32 mx-auto text-blue-500 animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-blue-500 rounded-full opacity-20 animate-ping"></div>
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-800">Protect your supply chain against cyber threats</p>
            <div className="text-lg text-gray-600 space-y-2">
              <p>🏆 Huawei Cloud ICT Competition 2025</p>
              <p>📍 Casablanca, Morocco</p>
            </div>
            <div className="grid grid-cols-5 gap-4 mt-8 text-sm">
              <div className="bg-blue-50 p-3 rounded">
                <p className="font-bold">Kaouthar</p>
                <p className="text-xs text-gray-600">CEO & Product</p>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <p className="font-bold">Reda</p>
                <p className="text-xs text-gray-600">Security Lead</p>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <p className="font-bold">Abdellatif</p>
                <p className="text-xs text-gray-600">Cloud Architect</p>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <p className="font-bold">Ikram</p>
                <p className="text-xs text-gray-600">AI Engineer</p>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <p className="font-bold">Mouad</p>
                <p className="text-xs text-gray-600">Frontend Dev</p>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "The Problem",
        subtitle: "An invisible threat costing millions",
        content: (
          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
              <p className="text-xl font-bold text-red-700 mb-2">🚨 61% of cyberattacks come through suppliers</p>
              <p className="text-gray-700">Source: IBM Security Report 2024</p>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-3xl font-bold text-red-600">$4.5M</p>
                <p className="text-sm text-gray-600">Average supply chain attack cost</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-3xl font-bold text-orange-600">287 days</p>
                <p className="text-sm text-gray-600">Average detection time</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-3xl font-bold text-yellow-600">40%</p>
                <p className="text-sm text-gray-600">Moroccan companies unprotected</p>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg mt-6">
              <p className="font-bold text-lg mb-3">Real case: NotPetya Attack (2017)</p>
              <ul className="space-y-2 text-gray-700">
                <li>✗ Origin: Compromised Ukrainian software supplier</li>
                <li>✗ Impact: $10 billion in global damages</li>
                <li>✗ Victims: Maersk, FedEx, Merck...</li>
                <li className="text-red-600 font-bold">✗ No tool was monitoring this supplier</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        title: "The ChainShield Solution",
        subtitle: "Visualize, Assess, Protect",
        content: (
          <div className="space-y-6">
            <p className="text-xl text-center text-gray-700">SaaS platform for cyber risk assessment in your supply chain</p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg">
                <Globe className="w-12 h-12 mb-4" />
                <p className="font-bold text-lg mb-2">3D Mapping</p>
                <p className="text-sm">Visualize all your supplier relationships in real-time</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg">
                <Zap className="w-12 h-12 mb-4" />
                <p className="font-bold text-lg mb-2">AI Scoring</p>
                <p className="text-sm">Intelligent algorithm for cyber risk rating</p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg">
                <Lock className="w-12 h-12 mb-4" />
                <p className="font-bold text-lg mb-2">24/7 Monitoring</p>
                <p className="text-sm">Instant alerts on detected vulnerabilities</p>
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="font-bold text-lg mb-3">🎯 4-step Workflow:</p>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-white p-3 rounded shadow">
                  <p className="font-bold text-blue-600">1. Connect</p>
                  <p className="text-xs text-gray-600 mt-1">Import your suppliers</p>
                </div>
                <div className="bg-white p-3 rounded shadow">
                  <p className="font-bold text-blue-600">2. Scan</p>
                  <p className="text-xs text-gray-600 mt-1">OSINT + CVE + Shodan</p>
                </div>
                <div className="bg-white p-3 rounded shadow">
                  <p className="font-bold text-blue-600">3. Analyze</p>
                  <p className="text-xs text-gray-600 mt-1">AI calculates score</p>
                </div>
                <div className="bg-white p-3 rounded shadow">
                  <p className="font-bold text-blue-600">4. Act</p>
                  <p className="text-xs text-gray-600 mt-1">Report + Actions</p>
                </div>
              </div>
            </div>
          </div>
        )
      }
    ]
  };

  const totalSlides = slides[language].length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const currentSlideData = slides[language][currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Language Toggle */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
            className="bg-white px-4 py-2 rounded-lg shadow hover:shadow-lg transition font-semibold text-blue-600"
          >
            {language === 'fr' ? '🇬🇧 English' : '🇫🇷 Français'}
          </button>
        </div>

        {/* Slide Container */}
        <div className="bg-white rounded-2xl shadow-2xl p-12 min-h-[600px]">
          {/* Slide Header */}
          <div className="mb-8 border-b-4 border-blue-500 pb-4">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{currentSlideData.title}</h1>
            <p className="text-xl text-gray-600">{currentSlideData.subtitle}</p>
          </div>

          {/* Slide Content */}
          <div className="mb-12">
            {currentSlideData.content}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t-2 border-gray-200">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition ${
                currentSlide === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              {language === 'fr' ? 'Précédent' : 'Previous'}
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    index === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition ${
                currentSlide === totalSlides - 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {language === 'fr' ? 'Suivant' : 'Next'}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4 text-gray-500 text-sm">
            Slide {currentSlide + 1} / {totalSlides}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-600">
          <p className="font-semibold">ChainShield.MA - Huawei Cloud ICT Competition 2025</p>
          <p className="text-sm">Casablanca, Morocco | kaouthar@chainshield.ma</p>
        </div>
      </div>
    </div>
  );
};

export default PitchDeck;