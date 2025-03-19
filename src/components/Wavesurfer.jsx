import React, { useEffect, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import Play from '../assest/play.png';
import Pause from '../assest/pause.png';
import LoadingIcon from '../assest/loading.png'; // استبدل بهذا مسار الأيقونة الخاصة بالتحميل

const Wavesurfer = ({ audioUrl }) => {
  const [wavesurferInstance, setWavesurferInstance] = useState(null); // حالة للاحتفاظ بالنسخة المبدئية للموجة
  const [isPlaying, setIsPlaying] = useState(false); // حالة لتحديد ما إذا كان الصوت قيد التشغيل أم لا
  const [isLoading, setIsLoading] = useState(true); // حالة لتتبع ما إذا كان الصوت قيد التحميل

  useEffect(() => {
    // إنشاء نسخة من wavesurfer عند تحميل المكون
    const wave = WaveSurfer.create({
      container: '#waveform', // حاوية الموجة الصوتية
      waveColor: '#1b0254', // لون الموجة الصوتية
      progressColor: '#ffffff', // لون التقدم في الموجة
      cursorColor: 'navy', // لون المؤشر
      barWidth: 2, // عرض الأعمدة الموجية
      height: 50, // ارتفاع الموجة
      responsive: true, // اجعل الموجة مرنة مع حجم الشاشة
    });

   wave.load(audioUrl);

    // عندما يصبح الصوت جاهزًا
    wave.on('ready', () => {
      setIsLoading(false); // تغيير حالة التحميل
      wave.play(); // تشغيل الصوت بعد تحميله
      setIsPlaying(true); // تحديد حالة التشغيل على أنها قيد التشغيل
    });

    // أثناء تحميل الصوت
    wave.on('loading', () => {
      setIsLoading(true); // تأكد من أن الصوت لا يزال في حالة تحميل
    });

    setWavesurferInstance(wave); // حفظ النسخة داخل حالة المكون

    // تنظيف الموجة عند مغادرة المكون
    return () => {
      wave.destroy();
    };
  }, [audioUrl]); // إعادة تحميل عند تغيير `audioUrl`

  // دالة لتشغيل/إيقاف الصوت
  const togglePlay = () => {
    if (wavesurferInstance) {
      wavesurferInstance.playPause();
      setIsPlaying(!isPlaying); // تغيير حالة التشغيل
    }
  };

  return (
    <div>
      <div id="waveform"></div>

      {/* حالة تحميل الصوت */}
      {isLoading && (
        <div >
          <img src={LoadingIcon} alt="Loading..." className="img-player" />
        </div>
      )}

      {/* مشغل الصوت */}
      {!isLoading && (
        <div className="player-icons">
          <div onClick={togglePlay}>
            {isPlaying ? (
              <img src={Pause} alt="Pause" className="img-player" />
            ) : (
              <img src={Play} alt="Play" className="img-player" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Wavesurfer;
