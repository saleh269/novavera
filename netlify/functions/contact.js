exports.handler = async function(event, context) {
  try {
    const payload = JSON.parse(event.body || '{}');
    console.log('Contact form received', payload);
    return { statusCode: 200, body: JSON.stringify({ ok: true, message: 'Mock received' }) };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: err.message }) };
  }
}
