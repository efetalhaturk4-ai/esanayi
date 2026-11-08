import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default function App() {
  const [screen, setScreen] = useState('home');
  const [category, setCategory] = useState('');
  const [answers, setAnswers] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);

  const questions = {
    'Motor ve soğutma': [
      'Motor sıcaklığı normalden fazla mı yükseliyor?',
      'Aracın suyu veya antifrizi eksiliyor mu?',
      'Fan geç açılıyor veya hiç açılmıyor mu?',
      'Hararet özellikle yokuşta veya trafikte mi yükseliyor?',
    ],
    'Elektrik ve elektronik': [
      'Gösterge panelinde arıza lambası yanıyor mu?',
      'Farlar veya diğer elektrikli parçalar düzensiz çalışıyor mu?',
      'Araç bazen çalışmıyor veya marşta sorun çıkarıyor mu?',
      'Elektrik problemi bazen kendiliğinden düzeliyor mu?',
    ],
    'Yakıt ve LPG': [
      'Araç LPG’de benzine göre daha kötü mü çalışıyor?',
      'Gaz verirken tekleme veya silkeleme oluyor mu?',
      'Rölantide devir dal
